<template>
  <el-form
    :inline="true"
    @submit.prevent="onSubmit"
    :model="formInline"
    class="demo-form-inline"
  >
    <el-form-item>
      <el-input v-model="formInline.task" placeholder="Write a task"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">Add Task</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="toDoList"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    >
    <el-table-column type="index" label="#"> </el-table-column>
    <el-table-column prop="task" label="Task">
      <template #default="scope">
        <span :style="textDecorationLineThrough(scope.row.done)"
          >{{ scope.row.task }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <!-- <el-button size="mini" disabled @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        > -->
        <el-button
          size="mini"
          type="success"
          @click="handleDone(scope.$index, scope.row)"
          >Done</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      toDoList: [],
      formInline: {
        task: "",
        done: "",
      },
    };
  },
  methods: {
    onSubmit() {
      let newTask = {
        task: this.formInline.task,
        done: false,
      };
      this.toDoList.push(newTask);
      this.formInline.task = "";
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index) {
      this.toDoList.splice(index, 1);
    },
    handleDone(index) {
      this.toDoList[index].done === false
        ? (this.toDoList[index].done = true)
        : (this.toDoList[index].done = false);
    },
    tableRowClassName({row}) {
      if (row.done) {
        return "success-row";
      }
      return "";
    },
    textDecorationLineThrough(rowStatus){
      return rowStatus ? 'text-decoration:line-through;' : ''
    }
  },
};
</script>

<style>
  .el-table .success-row {
    background: greenyellow;
  }
</style>