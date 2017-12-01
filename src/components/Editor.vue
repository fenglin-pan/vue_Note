<template>
  <div id="note-editor">
    <textarea :value='activeNoteText' @input="editNote" class='edit-area'></textarea>
  </div>
</template>

<script>
import store from '../vuex/store'
import {mapMutations} from 'vuex'
export default {
  computed:{
      activeNoteText(){
          return this.$store.getters.activeNote.text
      }
  },
  methods:{
      editNote(e){
          this.$store.dispatch('editNote',e.target.value)
      }

  },
  store
}
</script>
<style type="text/css">  
#note-editor{
  float: left;
  width:58%;
  padding: 10px 0 0px 10px ;
  height: 100%;
}
#note-editor textarea{
  width: 100%;
  height: 100%;
  resize: none;
  border: 1px solid  #E8C4D6;
  border-radius: 0;
  outline: none
}
</style>

