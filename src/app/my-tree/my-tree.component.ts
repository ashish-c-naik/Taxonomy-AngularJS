import {
    Component,
    OnInit,
    Directive,
    ElementRef,
    ViewChild
} from '@angular/core';
import {
    element
} from 'protractor';
declare var angular: any;
@Component({
    selector: 'app-my-tree',
    templateUrl: './my-tree.component.html',
    styleUrls: ['./my-tree.component.css']
})
export class MyTreeComponent implements OnInit {
    private counter: number = 10
    private display: boolean = false
    private confirmed: boolean
    private rename: Element
    private nodeId: number
    private data = {}
    constructor() {
        this.data = [{
                id: 1,
                name: 'Programming languages by programming paradigm',
                has_children:"True",
                children: [{
                        id: 2,
                        name: 'Object-oriented programming',
                        has_children:"True",
                        children: [{
                            id:3,
                            name:"Java",
                            has_children:"False",
                            children:[]
                        },{
                            id:4,
                            name:"C++",
                            has_children:"False",
                            children:[]
                        },{
                            id:5,
                            name:"C#",
                            has_children:"False",
                            children:[]
                        }]
                    },
                    {
                        id: 6,
                        name: 'Prototype-based programming',
                        has_children:"True",
                        children: [{
                            id:7,
                            name:"Javascript",
                            has_children:"False",
                            children:[]
                        },{
                            id:8,
                            name:"Coffeescript",
                            has_children:"False",
                            children:[]
                        },{
                            id:9,
                            name:"Lua",
                            has_children:"False",
                            children:[]
                        }]
                    }
                ]
            }
        ];


    }

    public MakeBold = function(e) {
        console.log(e)
        if (this.display == false) {
            this.display = true
            console.log(angular.element("#menu" + e + ""))
            angular.element("#menu" + e + "")[0].style.display = "inline-block";
        } else {
            angular.element("#menu" + e + "")[0].style.display = "none";
            this.display = false
        }
    }
    @ViewChild('text_area1') text_area1: ElementRef;
    public Rename = function(node, id) {
        console.log("NODE", node)
        this.rename = node
        this.text_area1.nativeElement.style.display = "block"
    }
    public RenameName = function(e) {
        e = e.trim()
        if(e != "")
            this.rename.data.name = e
        this.text_area1.nativeElement.style.display = "none"
    }
    public Remove = function(node) {
        console.log(node)
        this.confirmed = false
        if (node.hasChildren) {
            this.confirmed = confirm("This node has children.\nDelete?")
        } else {
            this.confirmed = true
        }
        if (this.confirmed) {
            let nodeParent = node.parent;
            nodeParent.data.children.splice(nodeParent.data.children.indexOf(node.data), 1);
            node.treeModel.update();
            this.counter--;
        }
        this.parent_haschildren(node.parent)
    }
    parent_haschildren(node){
        console.log(node.data)
        if(node.data.children.length == 0){
            node.data.has_children = "False"
        }
    }

    public New = function(node) {
        node.data.has_children = "True"
        node.data.children.push({
            id: ++this.counter,
            name: 'New Node',
            has_children:"False",
            children: []
        });
        node.treeModel.update();
    }
    public Close = function(e) {
        console.log(e.path[3])
        e.path[3].style.display = "none"
    }


    ngOnInit() {}

}