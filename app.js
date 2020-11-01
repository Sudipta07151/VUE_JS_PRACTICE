new Vue({
    el:'#app',
    data:{
        title:'Becoming a Vue Ninja',
        site_URL: 'https://www.youtube.com',
        name:'Sudipta',
        classes:['one','two'],
        name:'SUDIPTA',
        wage:10000,
        ninja_belt:'black',
        coords:{
            x:0,
            y:0
        },
        showName:true,
        showAge:true,
        items:['RED','GREEN','YELLOW','PURPLE','GOLDEN'],
        ninjas:[
            {name:'crystal', age:25, belt:'orange'},
            {name:'shrobana', age:22, belt:'black' },
            {name:'samparna', age:23, belt:'yellow'}
        ]
    },
    methods:{
        greet(name){
            return `HELLO ${name} I AM GREETING FROM VUE METHOD`
        },
        wageManupulation(amount){
            this.wage+=amount
        },
        logEvent(e){
            console.log(e)
        },
        logCoords(e){
            this.coords.x=e.offsetX,
            this.coords.y=e.offsetY
        },
        updateName(e){
            this.name=e.target.value;
        },
        logMessage(){
            console.log('HI!')
        },
        toggleName(){
            if(this.showName===true)
            {
                this.showName=false;
            }
            else
            {
                this.showName=true;
            }
        },
        toggleAge(){
            this.showAge=!this.showAge;
        }

    }
})