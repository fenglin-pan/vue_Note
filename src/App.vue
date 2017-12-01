<template>
  <div id="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'
export default {
  components:{
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style>
html,#app{
  height: 100%;
}

body{
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
