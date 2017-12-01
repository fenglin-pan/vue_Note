import Vue from 'vue'
import Vuex from 'vuex'




Vue.use(Vuex)

const state ={
    notes:[],
    activeNote:{}
}

const mutations = {
    //add note
    ADD_NOTE(state){
        const newNote ={
            text:'your new note',
            favorite:false
        }
        state.notes.push(newNote),
        state.activeNote = newNote
    },
    //set active note 设置当前激活的笔记
    UPDATE_ACTIVE_NOTE(state,note){
        state.activeNote = note
    },
     //eidt note
    EDIT_NOTE(state,text){
        state.activeNote.text= text; 
    },
    //toggle favorite notes
    TOGGLE_FAVORITE(state){
        state.activeNote.favorite=!state.activeNote.favorite;
        if(state.activeNote.favorite) alert('收藏成功')
        else if(!state.activeNote.favorite) alert('取消收藏')
    },
    //delete notes
    DELETE_NOTE(state){
        for(let i = 0;i<state.notes.length;i++){
            if(state.notes[i] == state.activeNote){
                state.notes.splice(i,1)
            }
        }
        if(state.notes.length>0){
            state.activeNote = state.notes[0]            
        }else{
            state.activeNote.text=''
        }
    }
}

const actions = {
    addNote({commit}){
        commit('ADD_NOTE');
    },
    // editNote({commit},text){
    //     commit('EDIT_NOTE',text)
    // },
    editNote({ commit }, text) { 
        commit('EDIT_NOTE',text)
    },
    toogleFavorite({commit}){
        commit('TOGGLE_FAVORITE')
    },
    deleteNote({commit}){
        commit('DELETE_NOTE');
    },
    updateActiveNotes({commit},note){
        commit('UPDATE_ACTIVE_NOTE',note)
    }
}
const getters={
    //getter函数从store获取组件所需的数据
    //组件展示：组件中使用getter函数获取新的数据，进行展示
    notes:state=>state.notes,
    activeNote:state=>state.activeNote
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})