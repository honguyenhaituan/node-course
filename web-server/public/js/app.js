console.log('Client side javascript file is loaded!')

fetch('/weather?address=Boston').then((res) => {
    res.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
        }
    })
})