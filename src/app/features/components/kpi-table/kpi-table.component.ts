import { Component, OnInit , inject} from '@angular/core';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-kpi-table',
  templateUrl: './kpi-table.component.html',
  styleUrls: ['./kpi-table.component.scss']
})

export class KpiTableComponent implements OnInit {
    financeData: any[] = [] ; 
    displayedColumns:string[] = ['id','coin','symbol','price','change'];

    //constructor(){} again omitting constructor and using dependency injection
    private _financialService = inject(FinanceService);

    ngOnInit(): void {
      this._financialService.getFinanceData().subscribe(
        {
          next:(data)=>this.financeData = data,
          error:(err)=>console.error('Error fetching Data, ',err)
        } 
      );
    }
}
