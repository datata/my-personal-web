<template>
  <div>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input placeholder="Your Name" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="Your profession"
          v-model="form.profession"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Your email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Your phone" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create Pdf</el-button>
      </el-form-item>
    </el-form>

 
  </div>
</template>

<script>

export default {
  name: "CvApp",
  components: {
  },
  data() {
    return {
      form: {
        name: "",
        profession: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('onSubmit');
    },
  },
};
</script>