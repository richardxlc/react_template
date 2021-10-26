import React from "react";
import { Header,Segment,Grid,Image,Button} from "semantic-ui-react";


const HomepageLayout = () => {
  return(
    <>
    <div>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                我们帮助公司客户及志同道合的朋友
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                我们可以为您公司提供你们想象不到的各种可能。
                让我们通过纯数据分析更进一步的分析您的客户，优化提升您的竞争能力
              </p>
              
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='/images/white-image.png' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>了解更多</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>      
      </div>
    </>
  )
};
export default HomepageLayout;
