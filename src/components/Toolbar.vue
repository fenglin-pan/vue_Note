<template>
  <div id='toolbar'>
      <!-- <p class='icon iconfont icon-add' @click='addNote'></p>
      <p class='icon iconfont icon-collection' @click='toogleFavorite' :class="{active:activeNote.favorite}"></p>
      <p class='icon iconfont icon-close' @click='deleteNotes'></p> -->
     <p class="el-icon-plus" @click='addNote'></p>
     <p class="el-icon-star-on" @click='toogleFavorite':class="{active:activeNote.favorite}">
     </p>
     <p class="el-icon-minus" @click='deleteNotes'></p>
  </div>
</template>

<script>
    export default{
        methods:{
            addNote(){
                this.$store.dispatch('addNote')
            },
            toogleFavorite(){
                this.$store.dispatch('toogleFavorite')
            },
            deleteNotes(){
                this.$store.dispatch('deleteNote')
            }
        },
        computed:{
            activeNote(){
                return this.$store.getters.activeNote
            }
        }
    }
</script>

<style scoped>
#toolbar{
    float: left;
    width: 5%;
    height: 100%;
    background-color: #E8C4D6;
    padding: 35px 25px 25px 25px;
    opacity: 0.8;
}
#toolbar p{
    font-size: 30px;
    margin-bottom: 35px;
    margin-left: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
    color: #E87EB2;
   
}
.toolColor{
     color: #E87EB2;
}
#toolbar :hover{
    opacity: 1;
}
#toolbar .active{
    color: #F7A02C
}
#toolbar .changealert{
    width: 100px;
    position: absolute;
    left: 0;
    top: 0
}
</style>
