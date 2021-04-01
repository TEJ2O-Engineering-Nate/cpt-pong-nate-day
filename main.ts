input.onButtonPressed(Button.A, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.X, -1)
        paddleB.change(LedSpriteProperty.X, -1)
        paddleC.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddleA.get(LedSpriteProperty.X) < 3) {
        paddleA.change(LedSpriteProperty.X, 1)
        paddleB.change(LedSpriteProperty.X, 1)
        paddleC.change(LedSpriteProperty.X, 1)
    }
})
let paddleC: game.LedSprite = null
let paddleB: game.LedSprite = null
let paddleA: game.LedSprite = null
paddleA = game.createSprite(2, 4)
paddleB = game.createSprite(3, 4)
paddleC = game.createSprite(4, 4)
let ball = game.createSprite(randint(0, 4), 0)
let directionY = 1
basic.pause(500)
let directionX = randint(-1, 1)
let score = 0
game.setScore(0)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, directionX)
    ball.change(LedSpriteProperty.Y, directionY)
    if (ball.isTouching(paddleA) || ball.isTouching(paddleB) || ball.isTouching(paddleC)) {
        ball.change(LedSpriteProperty.X, directionX * -1)
        ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
        game.addScore(5)
    } else if (ball.get(LedSpriteProperty.Y) <= 0) {
        directionX = randint(-1, 1)
        directionY = 1
    } else if (ball.get(LedSpriteProperty.Y) >= 4) {
        ball.set(LedSpriteProperty.Blink, 1)
        basic.pause(1000)
        game.gameOver()
    } else if (ball.get(LedSpriteProperty.X) <= 0) {
        directionX = 1
    } else if (ball.get(LedSpriteProperty.X) >= 4) {
        directionX = -1
    }
    basic.pause(200)
})
