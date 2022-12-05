window.modelWindow = class{
    id='';
    confirmText='确定';
    title='标题';
    mainColor='##e96d30';
    mainHTML='';
    confirmFunction=()=>{alert('默认')}
    close(){
        document.getElementById(this.id).outerHTML='';
    }
    constructor({
        id,confirmText='确定',title='标题',mainColor='#e96d30',mainHTML='',confirmFunction=()=>{alert('默认传值')}
    }){
        this.id = id;
        this.confirmText = confirmText;
        this.title = title;
        this.mainColor = mainColor;
        this.mainHTML = mainHTML;
        this.confirmFunction = confirmFunction;
        this.render();
    }
    render(){
        const style = (()=>{
            let str='<style>';
            str+=`#${this.id}{--mainColor:${this.mainColor};width:100vw;height:100vh;overflow:hidden;background:rgba(0,0,0,.5);position:fixed;top:0;left:0;}`;
            str+=`#${this.id}>.main{width:50%;height:50%;background:white;border-radius:8px;margin: 20vh auto 0;overflow:hidden;}`;
            str+=`#${this.id}>.main>header,#${this.id}>.main>footer{height:12%;position:relative;background-color:white;overflow:hidden;margin:0;}`;
            str+=`#${this.id}>.main>section{height:76%;overflow:hidden;}`;
            str+=`#${this.id}>.main>header{border-bottom:1px solid #CECECE;}`;
            str+=`#${this.id}>.main>header>b.close{position:absolute;right:2%;top:20%;display:inline-block;font-size:23px;border-radius:50%;border:1px solid var(--mainColor);color:var(--mainColor);width:20px;height:20px;text-align:center;line-height:.89;}`;
            str+=`#${this.id}>.main>header>b.close:hover{background:var(--mainColor);color:white;cursor:pointer;}`;
            str+=`#${this.id}>.main>header>.title{font-size:23px;text-indent:10px;line-height:2;height:100%;margin:0;}`;
            str+=`#${this.id}>.main>footer{border-top:1px solid #CECECE;display:flex;align-items:center;}`;
            str+=`#${this.id}>.main>footer>div{height:80%;text-align:right;width:100%;}`;
            str+=`#${this.id}>.main>footer button.confirm{color:var(--mainColor);border:1px solid var(--mainColor);background:white;border-radius:4px;padding:5px 20px;margin-right:14px;}`;
            str+=`#${this.id}>.main>footer button.confirm:hover{color:white;background:var(--mainColor);cursor:pointer;}`;
            str+='</style>';
            str = str.replace(/;/g,' !important;');
            return str;
        })();
        let str=`
        <div id="${this.id}">
        ${style}
            <div class="main">
                <header>
                    <p class="title">${this.title}</p>
                    <b class="close">&times;</b>
                </header>
                <section>
                    ${this.mainHTML}
                </section>
                <footer>
                    <div>
                        <button type="button" class="confirm">${this.confirmText}</button>
                    </div>
                </footer>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend',str);
        document.getElementById(this.id).getElementsByClassName('close')[0].addEventListener('click',e=>{
            e.stopPropagation();
            this.close();
        })
        document.getElementById(this.id).getElementsByClassName('confirm')[0].addEventListener('click',e=>{
            e.stopPropagation();
            toString.call(this.confirmFunction)==='[object Function]'?this.confirmFunction():0;
        })
    }
}