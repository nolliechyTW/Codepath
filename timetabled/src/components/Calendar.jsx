import React from "react";
import Event from './Event';

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Breakfast' color ='green' location='Eggexllence'/>
                        {/* The remaining 7 cells will store any events for each day of the week. */}
                        <Event event='Breakfast' color ='green'/>
                        <td></td>
                        <Event event='Breakfast' color ='green' location='Cafe La Maude'/>
                        <td></td>
                        <td></td>
                        <Event event='Breakfast' color ='green'/>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Cruise🚢' color ='blue' location='Delaware River'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Market st 33th'/>
                        <td></td>
                        <td></td>
                        <Event event='Zoo 🐵' color ='blue' location='Philly Zoo'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='Starbucks ☕️' color ='green' location='Spruce St'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Museum of Art🎨' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='shoppeing🛍️' color ='blue' location='Fashion Area'/>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Starbucks ☕️' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Love Park💛' color ='blue' location='Rittenhouse Square'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='Pizza' color ='green' location='Angelo'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;
