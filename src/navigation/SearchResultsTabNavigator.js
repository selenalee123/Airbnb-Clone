import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from "@react-navigation/native";
// import { API, graphqlOperation } from "aws-amplify";
// import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
//   const [posts, setPosts] = useState([]);

//   const route = useRoute();
//   const { guests, viewport }  = route.params;

    return (
       <Tab.Navigator tabBarOptions={{
           activeTinColor: '#f15454',
           indicatorStyle: {
               backgroundColor: '#f15454',
           }
       }}>
           <Tab.Screen name={"List"} component={SearchResults}/>
           <Tab.Screen name={"Map"} component={SearchResultsMap}/>

       </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator





