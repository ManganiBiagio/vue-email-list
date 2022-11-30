




const { createApp } = Vue;


createApp({
 
  data () {
    return {
        emailList:[],
        numberOfEmail:10,
        
    };
  },
  methods:{
    fetchData(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp)=>{
            
            this.emailList.push(resp.data.response)
        })
    }
  },mounted(){
    for(let i=0;i<this.numberOfEmail;i++){
        this.fetchData()
    }
    
    
  }
}).mount("#app")