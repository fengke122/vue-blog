<template>
  <div>
    <canvas ref="canvas" :width="captchaWidth" :height="captchaHeight"></canvas>
    <img :src="captchaImage" alt="验证码" @click="refreshCaptcha">
  </div>
</template>

<script>
export default {
  data() {
    return {
      captchaWidth: 100, // 图形验证码的宽度
      captchaHeight: 40, // 图形验证码的高度
      captchaCode: '', // 验证码字符串
      captchaImage: null // 验证码图片的 Base64 编码
    }
  },
  mounted() {
    this.generateCaptcha()
  },
  methods: {
    // 生成随机的图形验证码
    generateCaptcha() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      this.captchaCode = this.randomCode()

      // 绘制图形验证码
      ctx.fillStyle = '#f2f2f2'
      ctx.fillRect(0, 0, this.captchaWidth, this.captchaHeight)
      ctx.font = 'bold 30px sans-serif'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#333'
      ctx.fillText(this.captchaCode, this.captchaWidth / 2, this.captchaHeight / 2)

      // 将 Canvas 转换为 Base64 格式
      this.captchaImage = canvas.toDataURL()
    },
    // 生成随机的验证码字符
    randomCode() {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
      let code = ''
      for (let i = 0; i < 4; i++) {
        const index = Math.floor(Math.random() * chars.length)
        code += chars[index]
      }
      return code
    },
    // 刷新验证码
    refreshCaptcha() {
      this.generateCaptcha()
    }
  }
}
</script>

<style scoped>
img {
  display: block;
  margin-top: 10px;
  cursor: pointer;
}
</style>
