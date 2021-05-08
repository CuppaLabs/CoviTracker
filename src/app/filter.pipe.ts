import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, districtSearch: string, stateSearch: any) {

    if (!districtSearch && stateSearch === 'All'){
      return value;
    }
    else if(districtSearch && stateSearch === 'All'){
      return (value || []).filter(item => item.hasOwnProperty('district_name') && new RegExp(districtSearch, 'gi').test(item['district_name'])); 
    }
    else if(districtSearch && stateSearch !== 'All'){
      return (value || []).filter(item => item.hasOwnProperty('district_name') && new RegExp(districtSearch, 'gi').test(item['district_name'])
       && item.state_id === parseInt(stateSearch)); 
    }
    else if(!districtSearch && stateSearch !== 'All'){
      return (value || []).filter(item => item.hasOwnProperty('state_id') && item.state_id === parseInt(stateSearch)); 
    }
  }
}
