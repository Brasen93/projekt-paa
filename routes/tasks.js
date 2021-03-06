const router = require('koa-router')()
const store = require('../store')

router.prefix('/tasks')

router.post('/add', async (ctx, next) => {
  const { title, description } = ctx.request.body
  await store.createTask(title, description)
  ctx.status = 200
  ctx.redirect('/')
})

router.post('/updateStatus', async (ctx, next) => {
  const { id, status } = ctx.request.body
  await store.updateTaskStatus(id, status)
  ctx.status = 200
})

router.delete('/deleteTask', async (ctx, next) => {
  await store.deleteTask()
  ctx.status = 201
})

module.exports = router
