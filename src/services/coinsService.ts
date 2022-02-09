interface ITransaction {
  timestamp: string;
  toAddress: string;
  fromAddress?: string;
  amount: string;
}

export interface IBalanceAndTransactions {
  balance: string;
  transactions: ITransaction[];
}

const ENDPOINT = 'http://jobcoin.gemini.com/turtle-deforest/api/';

export async function getBalance(address: string): Promise<IBalanceAndTransactions> {
  const data = await fetch(`${ENDPOINT}addresses/${address}`);
  return data.json();
}

export async function sendCoins(amount: string, toAddress: string, fromAddress: string) {

  try {
    const data = await fetch(`${ENDPOINT}transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `amount=${amount}&toAddress=${toAddress}&fromAddress=${fromAddress}`
    });

    return data.json();
  }
  catch(error) {
    console.log(error);
  }
}
