import React from 'react';

import styles from './Cards.module.css';

const Cards = (props) => {
   

    const confirmed = (props.data.confirmed)
    const dailyconfirmed = (props.data.dailyconfirmed)
    const recovered = (props.data.recovered)
    const dailyrecovered = (props.data.dailyrecovered)
    const deaths = (props.data.deaths)
    const dailydeceased = (props.data.dailydeceased)
    const lastUpdate = (props.data.lastUpdate)

    
    
    return (
        <div className={styles.maincontainer}>
         <div className={styles.container1}>
              <div className={styles.confirmed}>Total Confirmed</div>
              <div className={styles.noOfConfirmed}>{confirmed}</div>
              <div className={styles.increaseInConfirmed}> + {dailyconfirmed} cases in past 24 hours</div>
         </div>
         <div className={styles.container2}>
             <div className={styles.recovered}>Total Recovered</div>
              <div className={styles.noOfRecovered}>{recovered}</div>
              <div className={styles.increaseRecovered}> + {dailyrecovered} recovered in past 24 hours</div>
       
         </div>
         <div className={styles.container3}>
              <div className={styles.deaths}>Total Deaths</div>
              <div className={styles.noOfDeaths}>{deaths}</div>
              <div className={styles.increaseDeaths}> + {dailydeceased} deaths in past 24 hours</div>
       
         </div>

         <div className={styles.lastUpdateTime}>
             last updated {lastUpdate}
         </div>

        </div>
    )
}

export default Cards;