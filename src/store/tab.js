export default {
    state :{
        tabsList:[
            {
                path:'/home',
                name:'home',
                label:'首页',
            }
        ],
        currentMenu:null,
    },
    mutations:{
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMenu = null
            }
        },
    }
}