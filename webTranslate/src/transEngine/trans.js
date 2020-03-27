import {googleTrans}from "./googleTrans"
import {youdaoTrans} from "./youdaoTrans"

export var Trans={
    transEngineList:{},         //翻译引擎实例列表
    transEngine:"",             //当前翻译引擎。ge(谷歌)/yd(有道)
    transEngineObj:{},          //当前翻译引擎实例
    transTargetLang:"",         //目标语言。
    transOrigLang:"",           //源语言
    transType:"word",           //翻译类型。word(划词翻译)/text(输入文本翻译)/page(整页翻译)
    transText:"",               //被翻译内容
    transResult:{               //当前翻译内容
        //译文
        trans:[],
        //原文
        orig:[],
        //原文语言
        origLang:""
    },
    Execute:function(h_onloadfn){
        this.transResult.trans=[];
        this.transResult.orig=[];
        this.transResult.origLang="";
        this.transEngineObj.Execute(h_onloadfn);
    },
    GetLangList:function(){
        var langList={};
        langList=this.transEngineObj.langList;
        return langList;
    },
    Update:function(){
        this.transEngineObj=this.transEngineList[this.transEngine];
        this.transTargetLang=this.transEngineObj.defaultTargetLang;
        this.transOrigLang=this.transEngineObj.defaultOrigLang;
    },
    Clear:function(){
        this.transEngine="",                //当前翻译引擎。ge(谷歌)/yd(有道)
        this.transTargetLang="",            //目标语言。
        this.transOrigLang="",              //源语言
        this.transText=""                   //被翻译内容
        this.transResult.trans=[];
        this.transResult.orig=[];
        this.transResult.origLang="";
    },
    //注册翻译引擎接口
    RegisterEngine:function(){
        /**
         * 翻译引擎必须提供以下接口
            code:"",                    //代号
            codeText:"",                //代号描述
            defaultOrigLang:"",         //默认源语言
            defaultTargetLang:"",       //默认目标语言
            langList: {},               //支持翻译语言列表
            Execute: function (h_onloadfn) {}   
         */
        var transEngineListObj={};
        transEngineListObj[googleTrans.code]=googleTrans;
        transEngineListObj[youdaoTrans.code]=youdaoTrans;
        this.transEngineList=transEngineListObj;
    }
}