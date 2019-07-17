<template>
  <div>
    <a-form :form="form" >
      <a-form-item
        label="程序名"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: '请输入程序名' }]}
          ]"
          name="name"
          placeholder="给程序起个名字" />
      </a-form-item>
      <a-form-item
        label="程序描述"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder="请输入简要的程序描述，方便后期辨认与使用..."
          v-decorator="[
            'description',
            {rules: [{ required: true, message: '请输入程序描述' }]}
          ]" />
      </a-form-item>
      <a-form-item :wrapperCol="{span: 20, offset: 11}">
        <a-button type="primary" @click="nextStep">下一步</a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="step-form-style-desc">
      <h3>说明</h3>
      <h4>程序的作用：</h4>
      <p>每个程序可根据所选应用模块创建不同的应用端，并且每个程序中的每个应用端仅且一个，并且各端的数据依据程序共用，如：</p>
      <h4>陪玩模块支持微信小程序和支付宝小程序，那么即可创建微信小程序和支付宝小程序，并且这两个小程序共用一套数据。</h4>
      <!-- <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'addProgram1',
  data () {
    return {
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      form: this.$form.createForm(this)
    }
  },
  methods: {
    nextStep () {
      const { form: { validateFields } } = this
      // 先校验，通过表单校验后，才进入下一步
      validateFields((err, values) => {
        if (!err) {
          this.$emit('nextStep')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-style-desc {
  padding: 0 56px;
  color: rgba(0,0,0,.45);

  h3 {
    margin: 0 0 12px;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
