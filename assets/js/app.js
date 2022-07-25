document.title = ' Counter Clock App ';


// get elements

const fiverr_form = document.getElementById('fiverr_form');
const alarm = document.getElementById('alarm');
const alarm2 = document.getElementById('alarm2');
const stop_alarm = document.getElementById('stop_alarm');
const perval = document.getElementById('perval');
const counter = document.querySelector('.counter');
const counter_data = document.querySelector('.counter_data');
const msg = document.querySelector('.msg');
const bar = document.querySelector('.bar');

//   counter.innerHTML = `
                
//                     <h1>0 Y : 00 MN : 00 D : 00 H : 00 MI : 00 S</h1>
                
//                     `;

// get AllData

let list = '';
const getAllData = () =>{

    const data = readeLSData('counter_app');

    if (!data || data.length == 0) {
        list = ' ';
    }else if ( data ) {
        
        data.reverse().map((item) =>{

            list += `
            
            
            
            `;

        });

    }

    counter.innerHTML = list;

}

getAllData();

// submit form

 let count;

fiverr_form.onsubmit = (e) =>{


    e.preventDefault();

    clearInterval(count);

    const form_data = new FormData(e.target);

    const singleData  =  Object.fromEntries(form_data.entries());

    const { date , time }  =  Object.fromEntries(form_data.entries());

     let start_time = Date.now();
     let end_time = new Date(date + '  ' + time);


    if ( !date || !time ) {
        
        msg.innerHTML = setAlert('All Fields Are Required');

    } else {
        
      createLSData('counter_app', singleData);

        msg.innerHTML = '';

        getAllData();

        count = setInterval(() => {
        
            counDown(date, time, counter, count, alarm);

            alarm2.play();
            

            let per = countper(start_time,end_time);

            bar.style.width = `${per}%`;

            
            if (per > 0 && per < 15) {

                bar.style.backgroundColor = 'red';

            } else if (per >= 15 && per < 30) {
                
                bar.style.backgroundColor = 'pink';

            } else if (per >= 30 && per < 50) {
                
                bar.style.backgroundColor = 'yellow';

            } else if (per >= 50 && per < 70) {
                
                bar.style.backgroundColor = 'blue';

            } else if (per >= 70 && per < 85) {
                
                bar.style.backgroundColor = 'chocolate';

            }else{

                bar.style.backgroundColor = 'green';

            }


            if (!per) {
                bar.style.display = 'none'
                perval.innerHTML = ' ';
            }else{
                bar.style.display = 'block'
                perval.innerHTML = `${per}%`;
            }
            
        
        
        }, 1000);
    }

    
    
}





// stop alarm

stop_alarm.onclick = (e) =>{

    e.preventDefault();

    alarm.pause();

}


