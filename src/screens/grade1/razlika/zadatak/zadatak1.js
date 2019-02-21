import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ImageBackground, Dimensions, Button } from 'react-native';

import Btn from '../../.././../components/UI/buttons/ButtonWithBackground';
import Ballon from '../../../../components/Ballon/redBallon';
import backgroundImage from '../../../../media/images/poz_baloni1.png';
import redBallonImage from '../../../../media/images/redbubble.png';
import zvezdiceImage from '../../../../media/images/zvezdice.png';
import transparentImage from '../../../../media/images/transparent.png';


class RazlikaZadatak1Screen1 extends Component {
   constructor(props) {
      super(props);
      Dimensions.addEventListener('change', this.updateStyles);
   }

   resetGame = () => {
      this.setState({
         viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
         ballonClickedCount: 0,
         ballon1: {
            source: redBallonImage
         },
         ballon2: {
            source: redBallonImage
         },
         ballon3: {
            source: redBallonImage
         },
         ballon4: {
            source: redBallonImage
         },
         ballon5: {
            source: redBallonImage
         },
         ballon6: {
            source: redBallonImage
         },
         ballon7: {
            source: redBallonImage
         },
         ballon8: {
            source: redBallonImage
         },
         ballon9: {
            source: redBallonImage
         },
         ballon10: {
            source: redBallonImage
         },
         ballon11: {
            source: redBallonImage
         },
         ballon12: {
            source: redBallonImage
         }
      });
   };

   componentWillMount() {
      this.resetGame();
   }

   componentWillUnmount() {
      Dimensions.removeEventListener('change', this.updateStyles);
   }

   updateStyles = dims => {
      this.setState(prevState => {
         return {
            ballons: {
               ...prevState.ballons                            
            },
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
         }
      });
   }

   getTaskText = () => {
      return 'Milos je puknuo 5 baloncica. Pomogni Sari da pukne jedan vise od Milosa';
   }

   imageClick = (id) => { 
      switch (id) {
         case 1:
            if (this.state.ballon1.source === redBallonImage){            
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon1: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1         
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon1: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;
         
         case 2:
            if (this.state.ballon2.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon2: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon2: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 3:
            if (this.state.ballon3.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon3: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon3: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 4:
            if (this.state.ballon4.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon4: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon4: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 5:
            if (this.state.ballon5.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon5: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon5: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 6:
            if (this.state.ballon6.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon6: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon6: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
         break;

         case 7:
            if (this.state.ballon7.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon7: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon7: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 8:
            if (this.state.ballon8.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon8: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1            
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon8: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 9:
            if (this.state.ballon9.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon9: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1           
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon9: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 10:
            if (this.state.ballon10.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon10: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1           
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon10: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 11:
            if (this.state.ballon11.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon11: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1           
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon11: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;

         case 12:
            if (this.state.ballon12.source === redBallonImage){
               this.setState(prevState => {
                  return {
                     ...prevState,
                     ballon12: {
                        source: zvezdiceImage
                     },
                     ballonClickedCount: prevState.ballonClickedCount + 1           
                  }
               });
               setTimeout(() => {
                  this.setState(prevState => {
                     return {
                        ...prevState,
                        ballon12: {
                           source: transparentImage
                        }               
                     }
                  });
               }, 200);
            }
            break;
      
         default:
            break;
      }
      
      // setTimeout(() => {
      //    alert(this.state.ballonClickedCount);
      // }, 1);
      
      
   }


   render() {
      let game = (
         <View style={[styles.gameContainer, 
            this.state.viewMode === 'portrait' ?
            {flexDirection: 'row'} : {flexDirection: 'column'}]}
         >
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column'} : 
               {flexDirection: 'row'}]}
            >
               <Ballon ref={ref => this.lj = ref} source={this.state.ballon1.source} onPress={() => this.imageClick(1)}/>
               <Ballon source={this.state.ballon2.source} onPress={() => this.imageClick(2)}/>
               <Ballon source={this.state.ballon3.source} onPress={() => this.imageClick(3)}/>
               <Ballon source={this.state.ballon4.source} onPress={() => this.imageClick(4)}/>
            </View>
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column'} : 
               {flexDirection: 'row'}]}
            >
               <Ballon source={this.state.ballon5.source} onPress={() => this.imageClick(5)}/>
               <Ballon source={this.state.ballon6.source} onPress={() => this.imageClick(6)}/>
               <Ballon source={this.state.ballon7.source} onPress={() => this.imageClick(7)}/>
               <Ballon source={this.state.ballon8.source} onPress={() => this.imageClick(8)}/>
            </View>
            <View style={[styles.ballonContainer,
               this.state.viewMode === 'portrait' ?
               {flexDirection: 'column'} : 
               {flexDirection: 'row'}]}
            >               
               <Ballon source={this.state.ballon9.source} onPress={() => this.imageClick(9)}/>
               <Ballon source={this.state.ballon10.source} onPress={() => this.imageClick(10)}/>
               <Ballon source={this.state.ballon11.source} onPress={() => this.imageClick(11)}/>
               <Ballon source={this.state.ballon12.source} onPress={() => this.imageClick(12)}/>
            </View>
            
         </View>
      );
      return (
         <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
         >
            <View>
               <Text style={{textAlign: 'center'}}>{this.getTaskText()}</Text>
            </View>
            {/* <View> */}
               <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center'}}>               
                  <Btn color='blue' textColor='#fff' onPress={this.resetGame}>Reset</Btn>
                  <Text>Scoore: {this.state.ballonClickedCount}</Text>
               </View>
               {game}
            {/* </View> */}
         </ImageBackground>
      );
   }
}

const styles = StyleSheet.create({
   backgroundImage: {
      width: '100%',
      height: '100%',
   },
   gameContainer: {
      flex: 1,
   },
   ballonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },
});



const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(RazlikaZadatak1Screen1)
