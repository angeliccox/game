const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') 

canvas.width = 1024 // 1024
canvas.height = 64 * 9 // 576


class Sprite{
  constructor({position}){
    this.position= positon
    this.image= new Image()
    this.image.src= ''
  }


}

const player = new Player()

const keys = {
  w: {
    pressed: false,
  },
  a:{
    pressed: false,
  },
  d:{
   pressed:false,
  }

}
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width, canvas.height)

    player.velocity.x=0
    if (keys.d.pressed) player.velocity.x=5
    else if (keys.a.pressed) player.velocity.x= -5

    player.draw()
    player.update()
  }
  animate()

