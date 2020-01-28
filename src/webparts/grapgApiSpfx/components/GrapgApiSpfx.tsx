import * as React from 'react';
import styles from './GrapgApiSpfx.module.scss';
import { IGrapgApiSpfxProps } from './IGrapgApiSpfxProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { GraphOperations } from './GraphOperations';

export default class GrapgApiSpfx extends React.Component<IGrapgApiSpfxProps, {}> {

  private oGraphOperations: GraphOperations;
  constructor(props: IGrapgApiSpfxProps) {
    super(props);
    this.oGraphOperations = new GraphOperations(this.props.context);
  }

  public componentDidMount(): void {
    this.oGraphOperations.getData(`/me`).then((resp)=> {
      console.log(resp);
      alert("2");
    });
  }

  public render(): React.ReactElement<IGrapgApiSpfxProps> {
    return (
      <div className={styles.grapgApiSpfx}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
