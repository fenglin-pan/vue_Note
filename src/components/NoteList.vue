<template>
  <div id='notelist'>
      <div class='title'>
          NOTES
      </div>
      <div class='note-btn'>
        <span>
            <el-button plain @click="show='all'" :class="{'active':show=='all'}">all notes</el-button>
        </span><span>
            <el-button plain @click="show='favorite'" :class="{'active':show=='favorite'}">favorites</el-button>
        </span>      
      </div>
      <div>
          <ul>
              <!-- 点击一列 颜色变化 使用：class="{select:selectItem == index }"和@click='changeColor(index)' 点击一列 切换index 实现变色-->
              <li v-for='(item,index) in notes' :class="{'show':activatNote == item,select:selectItem == index }" @click="updateActiveNotes(item);changeColor(index)">
                  {{item.text}}
              </li>
          </ul>
      </div>

  </div>
</template>

<script>
    // import store from '../vuex/store'
    import {mapActions} from 'vuex'
    export default{
        data(){
            return {
                show:'all',
                selectItem:0
            }
        },
        // created(){
        //         for(let i =0; i<this.$ref.li.length;i++){
        //             this.$ref.li.style.class='select'
        //         }
        // },
        computed:{
            activated(){
                return this.$store.getters.activatNote
            },
            notes(){
                if(this.show=='all'){
                    return this.$store.getters.notes
                }else if(this.show=='favorite'){
                    return this.$store.getters.notes.filter(note=>note.favorite)
                }
            }
        },
        methods:{
            // updateNote(note){
            //     console.log(note);
            //     // console.log(this.$ref.li.style);
            //     this.$store.dispatch('updateActiveNotes',note)
            // },
            ...mapActions(['updateActiveNotes']),
            changeColor(index){
                this.selectItem = index
            }
        }
    }
</script>

<style>
    #notelist{
        width:30%;
        height: 100%;
        float: left;
        background-color: #F5F5F5;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    .title{
        font-size: 24px;
        text-align: center;
        padding: 25px;
        font-weight: 200;
    }
    el-button{
        color: #E87EB2;
    }
    .note-btn{
        text-align: center;
    }
    ul,li{
        list-style: none;
        font-size: 15px;
        padding: 0;
        margin: 0
    }
    ul{
        margin-top: 10px;
    }
    li{
        /* width:250px; */
        height: 30px;
        background-color:#fff;
        text-align:center;
        cursor: pointer;
        font-weight: 700;
        padding: 5px;
        overflow: hidden;
        
    }
    /* li:hover{
        background-color: #E5A2B9;
        color: #fff;
    } */
    .select{
        background-color:#E8C4D6;
        opacity:0.8;
        color:#fff;
        border-bottom:1px solid #E87EB2
    }

</style>
