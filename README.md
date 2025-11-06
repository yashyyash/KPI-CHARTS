# Starting the Project 

```
- step 1
- ng new KPI-CHARTS --version=16 --routing=true --style=scss
```

```
- step 2
- use Dummy Api from :
"https://api.mydummyapi.com/categories/finance" &
"https://api.mydummyapi.com/categories/finance"
```

```
- step 3 
" Add Angular-Material UI Library, yes , Azure/Blue Template"
"ng add @angular/material"
```

```
- step 4 
"Generate Services"
"npx ng g s features/services/finance"
this will create the following. 
npx ng g s /features/services/finance
- CREATE src/app/features/services/finance.service.spec.ts (362 bytes)
- CREATE src/app/features/services/finance.service.ts (136 bytes)
```

```
- step 5
"Generate Components for the Services"
"npx ng g c features/components/kpi-tables"

### got error here 
yashmutatkar@M-GFVNC3XW3X KPI-CHARTS % npx ng g c features/components/kpi-table 
Could not find an NgModule. Use the '--skip-import' option to skip importing in NgModule.
Could not find an NgModule. Use the '--skip-import' option to skip importing in NgModule.
yashmutatkar@M-GFVNC3XW3X KPI-CHARTS % ng generate component features/components/kpi-table --skip-import
CREATE src/app/features/components/kpi-table/kpi-table.component.scss (0 bytes)
CREATE src/app/features/components/kpi-table/kpi-table.component.html (24 bytes)
CREATE src/app/features/components/kpi-table/kpi-table.component.spec.ts (574 bytes)
CREATE src/app/features/components/kpi-table/kpi-table.component.ts (214 bytes)
yashmutatkar@M-GFVNC3XW3X KPI-CHARTS % 

- write code for component.ts
```