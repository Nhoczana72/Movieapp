import  React,{ useState} from 'react'
import axios from 'axios'
import { View , TouchableOpacity, TextInput,Text,Image} from 'react-native';
import { ScrollView } from 'react-native';
import styles from './styles'
 const searchitem = (props)=>{
    let urlimage ="https://image.tmdb.org/t/p/w500"
    const apisearch="https://api.themoviedb.org/3/search/movie?api_key=c55cb28a013ddccfc78f28d3e9f29101&page=1&include_adult=false";

    const [state,setstate]=useState({
        nameMovie:'',
        result:[],
        selected:{},
        load: false
    });
    const search=()=>{
        axios(apisearch+"&query="+state.nameMovie)
        .then(({data})=>{
            let result=data.results;
            setstate(prevState =>{
                return {...prevState,result:result}
            })
        })
    }
return(
    <View style={styles.container}>
        <View>
                <Text style={styles.txtitle}>iMDb</Text>
            </View>
            <View style={styles.txviewsearch}>
              <TextInput style={styles.inputtx}
                            
                            onChangeText={text=>setstate(prevState=>{
                                return {...prevState,nameMovie:text,load:true}
                            })}
                            placeholder='Search a movie'
                            value={state.nameMovie}
                            onSubmitEditing={search}
                ></TextInput>

                <TouchableOpacity style={styles.btnsearch}
                                    onPress={search}
                >
                    <Text style={styles.btntxsearch}>Search</Text>
                </TouchableOpacity>
            </View>
            {state.load ? 
                
                <ScrollView style={styles.scrollview}>
                    {state.result.map(result=>(
                        <TouchableOpacity key={result.id} style={styles.itemscrollview}
                                onPress={()=>props.navigation.navigate('Detail_Item',{id:result.id,})}>
                            
                            <Image 
                            style={{height:75,width:75}}
                            source={{
                                uri: `${urlimage}/${result.poster_path}`
                            }
                            }
                            />
                            <View style={{alignItems:'center',alignContent:'center',width:'75%'}}>
                            <Text style={{fontWeight:'bold',fontSize:15,color:'yellow'}}>{result.title}</Text>
                            <Text style={{color:'white',fontSize:13,color:'#DDDDDD'}} >{result.release_date}</Text>
                            <Text style={{color:'white',fontSize:10,marginHorizontal:5}}>{result.overview.slice(0, 100)+'...'}</Text>        
                            </View>
                            
                        </TouchableOpacity>
                    ))}
                </ScrollView>  : <View></View>}
    </View>
)
 };
export default searchitem

