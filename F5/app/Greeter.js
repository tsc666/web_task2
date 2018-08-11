(function($){
$.fn.lunbotu=function lunbo()
{
let oListLi = document.querySelectorAll("#list li");
let oPtionLi = document.querySelectorAll("#option li");
let oBtn = document.querySelectorAll("#btn a");
let wrap = document.querySelector("#wrap")
class Fade {
    constructor(oListLi, oPtionLi, oBtn) {
        this.oListLi = oListLi;
        this.oPtionLi = oPtionLi;
        this.oBtn = oBtn;
        this.len = oPtionLi.length;
        this.index = 0;
        }
    init() {
        this.optionSwitch();
        this.btnSwitch();
        }
    //使用事件代理
    optionSwitch() {
    window.onload = function(){
        var oBox = document.getElementById("option");
        oBox.onmouseover = function (ev) {     
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLocaleLowerCase() == 'li'){
                switch(target.id){
                    case 'op1' :
                        op1.className="active";
                        op4.className="";
                        ol1.className="block";
                        ol4.className="";
                        break;
                    case 'op2' :
                        op2.className="active";
                        op1.className="";
                        ol2.className="block";
                        ol1.className="";
                        break;
                    case 'op3' :
                        op3.className="active";
                        op2.className="";
                        ol3.className="block";
                        ol2.className="";
                        break;
                    case 'op4' :
                        op4.className="active";
                        op3.className="";
                        ol4.className="block";
                        ol3.className="";
                        break;
                    }
                }
            }
        }
    }
    //不使用事件代理
    btnSwitch() {
        for (let i = 0; i < 2; i++) {
            this.oBtn[i].addEventListener("click", () => {
            this.oPtionLi[this.index].className = "";
            this.oListLi[this.index].className = "";
            if (i) {
                this.index++;
                if (this.index == this.len) {
                    his.index = 0
                    }
                } else {
                    this.index--;
                    if (this.index == -1) {
                    this.index = this.len - 1
                    }
                    console.log(this.index)
                }
                    this.oPtionLi[this.index].className = "active";
                    this.oListLi[this.index].className = "block";
                })
                }
               }
            }


class FadeChildren extends Fade {
    constructor(oListLi, oPtionLi, oBtn, wrap) {
        super(oListLi, oPtionLi, oBtn);
        this.wrap = wrap;
        this.timer = null;
        }
    init() {
        this.play();
        this.pause();
        this.optionSwitch();
        this.btnSwitch();
        }
    //设计自动播放
    play() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
        this.oPtionLi[this.index].className = "";
        this.oListLi[this.index].className = "";
        this.index++;
        if (this.index == this.len) {
            this.index = 0
        }
            this.oPtionLi[this.index].className = "active";
            this.oListLi[this.index].className = "block";
            }, 1500)
        }

    pause(){
        //当鼠标悬停时停止播放
        this.wrap.addEventListener("mouseover",()=>{
        clearInterval(this.timer);
        });
        //鼠标移开继续播放
        this.wrap.addEventListener("mouseout",()=>{
        this.play()
        })
        }
       }
new FadeChildren(oListLi, oPtionLi, oBtn, wrap).init()
}
}(jQuery));