import React,{useState} from 'react';
import {View, Text, StyleSheet,  Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';



const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                thumbColor={Colors.primaryColor}
                trackColor={{true: Colors.primaryColor}}
                value={props.state}
                onValueChange={props.onChange}               
            />
        </View>
    )
}




const FilterScreen = (props) => {
    const  [ isGlutenFree, setGlutenFree] = useState(false);
    const  [ isLactose, setIsLactose] = useState(false);
    const   [isVegan, setIsVegan] = useState(false);
    const  [isVegetarian , setIsVegetarian] = useState(false);
    
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                label={'Gluten Free'} 
                state={isGlutenFree}
                onChange={newValue=> setGlutenFree(newValue)}
            />
            <FilterSwitch 
                label={'Lactose Free'} 
                state={isLactose}
                onChange={newValue=> setIsLactose(newValue)}
            />
            <FilterSwitch 
                label={'Vegan'} 
                state={isVegan}
                onChange={newValue=> setIsVegan(newValue)}
            />
            <FilterSwitch 
                label={'Vegetarian'} 
                state={isVegetarian}
                onChange={newValue=> setIsVegetarian(newValue)}
            />
            
            
        </View>
    )
};

FilterScreen.navigationOptions = navData=>{
    
    return {
        headerTitle: 'Filter Meals',
        headerLeft:( 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title={"Menu"}
                iconName={"ios-menu"}
                onPress={()=> {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title={"Save"}
                    iconName="ios-save"
                    onPress = {() => {
                        console.log('Save ')
                    }}
                />
            </HeaderButtons>
        )
    }
} 


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
});

export default FilterScreen;