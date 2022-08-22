import * as React from 'react';
import DatePicker from "react-datepicker";
import FormatDate from     '../../Utils/fomartDate';
import "react-datepicker/dist/react-datepicker.css";
import gains from '../../repositories/gains';

interface DateConstructor  {
    startDate: Date;
} 
interface IRouteParams {
    match: {
        params: {
            type: string;
        };
    }
  }
  
export class DateSelector extends React.Component<{}, DateConstructor> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

     formatDate(date: { getMonth: () => number; getDate: () => any; getFullYear: () => { (): any; new(): any; toString: { (): string | any[]; new(): any; }; }; }, format: string) {
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            aa: date.getFullYear().toString().slice(-2),
            aaaa: date.getFullYear()
        }
    
        return 'entry-balance' ? gains : gains;
    };



    private handleChange(date: any) {
        console.log('date is here!', date);
        this.setState({
            startDate: date
        });
    }

    public render() {
        const { startDate } = this.state;
        return (
            <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate} 
                onChange={this.handleChange}
                
            />
        )
    }
}