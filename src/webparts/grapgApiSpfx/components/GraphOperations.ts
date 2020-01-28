import { MSGraphClient } from '@microsoft/sp-http';
import { IWebPartContext, WebPartContext } from '@microsoft/sp-webpart-base';
export class GraphOperations {

    private context: WebPartContext;
    constructor(context: WebPartContext) {
        this.context = context;
    }

    public getData(query: string): Promise<any> {
        alert("-1")
        return this.context.msGraphClientFactory.getClient().then((client: MSGraphClient) => {
            alert("0");
             return client.api(query).get().then((response) => {

                // handle the response
                alert("1");
                console.log(response);
                return Promise.resolve(response);
            });
        });
    }

}