// 1. Высота body 4000px; Через каждые 3 секунды плавно крутите "ползунок" вниз и так же через секунду вверх. И так бесконечно раз

setInterval(() => {
    window.scrollTo({
        top: 4000,
        behavior: 'smooth'
    })
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, 1000)
}, 3000)