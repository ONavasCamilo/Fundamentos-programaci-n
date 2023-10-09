---@diagnostic disable: undefined-global, lowercase-global

tfm = {}

tfm.enum = {
    bonus = {
        point = 0,
        speed = 1,
        death = 2,
        spring = 3,
        booster = 5,
        electricArc = 6
    },
    emote = {
        dance = 0,
        laugh = 1,
        cry = 2,
        kiss = 3,
        angry = 4,
        clap = 5,
        sleep = 6,
        facepaw = 7,
        sit = 8,
        confetti = 9,
        flag = 10,
        marshmallow = 11,
        selfie = 12,
        highfive = 13,
        highfive_1 = 14,
        highfive_2 = 15,
        partyhorn = 16,
        hug = 17,
        hug_1 = 18,
        hug_2 = 19,
        jigglypuff = 20,
        kissing = 21,
        kissing_1 = 22,
        kissing_2 = 23,
        carnaval = 24,
        rockpaperscissors = 25,
        rockpaperscissors_1 = 26,
        rockpaperscissor_2 = 27
    },
    ground = {
        wood = 0,
        ice = 1,
        trampoline = 2,
        lava = 3,
        chocolate = 4,
        earth = 5,
        grass = 6,
        sand = 7,
        cloud = 8,
        water = 9,
        stone = 10,
        snow = 11,
        rectangle = 12,
        circle = 13,
        invisible = 14,
        web = 15,
        yellowGrass = 17,
        pinkGrass = 18,
        acid = 19
    },
    particle = {
        whiteGlitter = 0,
        blueGlitter = 1,
        orangeGlitter = 2,
        cloud = 3,
        dullWhiteGlitter = 4,
        heart = 5,
        bubble = 6,
        tealGlitter = 9,
        spirit = 10,
        yellowGlitter = 11,
        ghostSpirit = 12,
        redGlitter = 13,
        waterBubble = 14,
        plus1 = 15,
        plus10 = 16,
        plus12 = 17,
        plus14 = 18,
        plus16 = 19,
        meep = 20,
        redConfetti = 21,
        greenConfetti = 22,
        blueConfetti = 23,
        yellowConfetti = 24,
        diagonalRain = 25,
        curlyWind = 26,
        wind = 27,
        rain = 28,
        star = 29,
        littleRedHeart = 30,
        littlePinkHeart = 31,
        daisy = 32,
        bell = 33,
        egg = 34,
        projection = 35,
        mouseTeleportation = 36,
        shamanTeleportation = 37,
        lollipopConfetti = 38,
        yellowCandyConfetti = 39,
        pinkCandyConfetti = 40
    },
    shamanObject = {
        arrow = 0,
        littleBox = 1,
        box = 2,
        littleBoard = 3,
        board = 4,
        ball = 6,
        trampoline = 7,
        anvil = 10,
        cannon = 17,
        bomb = 23,
        orangePortal = 26,
        blueBalloon = 28,
        redBalloon = 29,
        greenBalloon = 30,
        yellowBalloon = 31,
        rune = 32,
        chicken = 33,
        snowBall = 34,
        cupidonArrow = 35,
        apple = 39,
        sheep = 40,
        littleBoardIce = 45,
        littleBoardChocolate = 46,
        iceCube = 54,
        cloud = 57,
        bubble = 59,
        tinyBoard = 60,
        companionCube = 61,
        stableRune = 62,
        balloonFish = 65,
        longBoard = 67,
        triangle = 68,
        sBoard = 69,
        paperPlane = 80,
        rock = 85,
        pumpkinBall = 89,
        tombstone = 90,
        paperBall = 95
    }
  }
  
  tfm.exec = {
    addConjuration = function(xPosition, yPosition, duration) end,
    addImage = function(imageId, target, xPosition, yPosition, targetPlayer, scaleX, scaleY, rotation, alpha, anchorX, anchorY, fadeIn) end,
    addJoint = function(id, ground1, ground2, jointDef) end,
    addNPC = function(name, npcDef, targetPlayer) end,
    addPhysicObject = function(id, xPosition, yPosition, bodyDef) end,
    addShamanObject = function(objectType, xPosition, yPosition, angle, xSpeed, ySpeed, ghost, options) end,
    attachBalloon = function(playerName, yes, color, transparent, speed) end,
    changePlayerSize = function(playerName, size) end,
    chatMessage = function(message, playerName) end,
    disableAfkDeath = function(activate) end,
    disableAllShamanSkills = function(active) end,
    disableAutoNewGame = function(activate) end,
    disableAutoScore = function(activate) end,
    disableAutoShaman = function(activate) end,
    disableAutoTimeLeft = function(activate) end,
    disableDebugCommand = function(activate) end,
    disableMinimalistMode = function(activate) end,
    disableMortCommand = function(activate) end,
    disablePhysicalConsumables = function(active) end,
    disablePrespawnPreview = function(display) end,
    disableWatchCommand = function(activate) end,
    displayParticle = function(particleType, xPosition, yPosition, xSpeed, ySpeed, xAcceleration, yAcceleration, targetPlayer) end,
    explosion = function(xPosition, yPosition, power, radius, miceOnly) end,
    freezePlayer = function(playerName, freeze, displayIce) end,
    getPlayerSync = function() end,
    giveCheese = function(playerName) end,
    giveConsumables = function(playerName, consumableId, amount) end,
    giveMeep = function(playerName, canMeep) end,
    giveTransformations = function(playerName, canTransform) end,
    killPlayer = function(playerName) end,
    linkMice = function(playerName1, playerName2, linked) end,
    lowerSyncDelay = function(playerName) end,
    moveObject = function(objectId, xPosition, yPosition, positionOffset, xSpeed, ySpeed, speedOffset, angle, angleOffset) end,
    movePhysicObject = function(objectId, xPosition, yPosition, positionOffset, xSpeed, ySpeed, speedOffset, angle, angleOffset) end,
    movePlayer = function(playerName, xPosition, yPosition, positionOffset, xSpeed, ySpeed, speedOffset) end,
    newGame = function(mapCode, flipped) end,
    playEmote = function(playerName, emoteId, emoteArg) end,
    playMusic = function(music, Channel, volume, loop, fade, targetPlayer) end,
    playSound = function(sound, volume, soundPosX, soundPosY, targetPlayer) end,
    playerVictory = function(playerName) end,
    removeBonus = function(id, targetPlayer) end,
    removeCheese = function(playerName) end,
    removeImage = function(imageId, fadeOut) end,
    removeJoint = function(id) end,
    removeObject = function(objectId) end,
    removePhysicObject = function(id) end,
    respawnPlayer = function(playerName) end,
    setAieMode = function(enable, sensibility, targetPlayer) end,
    setAutoMapFlipMode = function(flipped) end,
    setGameTime = function(time, init) end,
    setNameColor = function(playerName, color) end,
    setPlayerGravityScale = function(playerName, gravityScale, windScale) end,
    setPlayerNightMode = function(nightMode, playerName) end,
    setPlayerScore = function(playerName, score, add) end,
    setPlayerSync = function(playerName) end,
    setRoomMaxPlayers = function(maxPlayers) end,
    setRoomPassword = function(password) end,
    setShaman = function(playerName, makeAShaman) end,
    setShamanMode = function(playerName, mode) end,
    setVampirePlayer = function(playerName, makeAVampire) end,
    setWorldGravity = function(x, y) end,
    snow = function(duration, snowballPower) end,
    stopMusic = function(Channel, targetPlayer) end
  }
  
  system = {
    bindKeyboard = function(playerName, keyCode, down, activate)
        -- Your implementation here
    end,
  
    bindMouse = function(playerName, active)
        -- Your implementation here
    end,
  
    disableChatCommandDisplay = function(command, hide)
        -- Your implementation here
    end,
  
    exit = function()
        -- Your implementation here
    end,
  
    giveAdventurePoint = function(playerName, achievementCode, amount)
        -- Your implementation here
    end,
  
    giveEventGift = function(playerName, giftCode)
        -- Your implementation here
    end,
  
    loadFile = function(fileNumber)
        -- Your implementation here
    end,
  
    loadPlayerData = function(playerName)
        -- Your implementation here
    end,
  
    luaEventLaunchInterval = function(interval, random)
        -- Your implementation here
    end,
  
    newTimer = function(callback, time, loop, arg1, arg2, arg3, arg4)
        -- Your implementation here
    end,
  
    openEventShop = function(eventName, playerName)
        -- Your implementation here
    end,
  
    removeTimer = function(timerId)
        -- Your implementation here
    end,
  
    saveFile = function(data, fileNumber)
        -- Your implementation here
    end,
  
    savePlayerData = function(playerName, data)
        -- Your implementation here
    end,
  
    setLuaEventBanner = function(bannerId)
        -- Your implementation here
    end
  }
  
  -- Funciones y variables de ui
  ui = {
    addPopup = function(id, type, text, targetPlayer, x, y, width, fixedPos)
        -- Your implementation here
    end,
  
    addTextArea = function(id, text, targetPlayer, x, y, width, height, backgroundColor, borderColor, backgroundAlpha, fixedPos)
        -- Your implementation here
    end,
  
    removeTextArea = function(id, targetPlayer)
        -- Your implementation here
    end,
  
    setBackgroundColor = function(color)
        -- Your implementation here
    end,
  
    setMapName = function(text)
        -- Your implementation here
    end,
  
    setShamanName = function(text)
        -- Your implementation here
    end,
  
    showColorPicker = function(id, targetPlayer, defaultColor, title)
        -- Your implementation here
    end,
  
    updateTextArea = function(id, text, targetPlayer)
        -- Your implementation here
    end,
  }