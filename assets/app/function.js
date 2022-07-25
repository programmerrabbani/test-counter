/**
 * Set Alert
 */

const setAlert = (msg , type="danger") =>{

    return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;

}


/**
 * create LS value
 */

const createLSData = (key,value) =>{

    let data = [];

    if (localStorage.getItem(key)) {
        
        data = JSON.parse(localStorage.getItem(key));

    }

    data.push(value);

    localStorage.setItem(key , JSON.stringify(data));

}

/**
 * reade LS value
 */

const readeLSData = (key) =>{



    if (localStorage.getItem(key)) {
        
        return JSON.parse(localStorage.getItem(key));

    }else{
        return false;
    }

}



/**
 *  coundown value
 */


const counDown = (date, time, counter, interval = null, alarm = null) => {

    let start_time = Date.now();
    let end_time = new Date(date + '  ' + time);
    let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

    let total_sec = Math.floor(order_time / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);
    let total_months = Math.floor(total_day / 30);
    let total_years = Math.floor(total_months / 12);

    let months = total_months - (total_years * 12);
    let days = total_day - (total_years * 12 * 30) - (months * 30);
    let hours = total_hour - (total_years * 12 * 30 * 24) - (months * 30 * 24) - (days * 24);
    let min = total_min - (total_years * 12 * 30 * 24 * 60) - (months * 30 * 24 * 60) - (days * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_years * 12 * 30 * 24 * 60 * 60) - (months * 30 * 24 * 60 * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);
    
    

        

        counter.innerHTML = `
                
                    <h1>${total_years} Y : ${months} MN : ${days} D : ${hours} H : ${min} MI : ${sec} S</h1>
                
                    `;


   




    if (total_sec <= 0) {

        clearInterval(interval);
        alarm.play()

    }

}


/**
 *  counter per value
 */


 const countper = ( start_time , end_time ) =>{

    let time_diff = end_time - start_time;
    let time_change = end_time - Date.now();

    return Math.floor((100 * time_change) / time_diff);

 }