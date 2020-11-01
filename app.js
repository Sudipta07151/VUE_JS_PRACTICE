new Vue({
    el:'#app',
    data:{
        title:'Becoming a Vue Ninja',
        site_URL: 'https://www.youtube.com',
        name:'Sudipta',
        classes:['one','two'],
        name:'SUDIPTA',
        wage:10000,
        coords:{
            x:0,
            y:0
        }
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
        }
    }
})