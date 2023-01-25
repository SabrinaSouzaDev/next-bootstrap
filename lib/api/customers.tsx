
  export let getCustomers = (): Promise<Array<{ id: number, name:string , email: string}>> => {
    return new Promise((resolve) => {
        resolve(rows);
    });
  };


  const rows = [
    { id: 1, name: 'Luke Skywalker' || 'Skywalker', email: 'luke.skywalker@starwars.com' },
    
  ];
  
  
  export let getCustomerById = (id: number): Promise<{ id: number, name: string, email: string}> => {
      return new Promise((resolve) => {
        const result: any = rows.find(row => row.id === id);
          resolve(result);
      });
  }
