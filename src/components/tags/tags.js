import React, {useEffect, useState} from "react";
import "./tags.css"
import {getPostData, getTagsData} from "../../redux/reducers/APIFuntions";
import {useDispatch, useSelector} from "react-redux";
import {setTag} from "../../redux/actions/tagsSelectActions";
import {setPage} from "../../redux/actions/pageSelectActions";

const Tags = () => {
    const dispatch = useDispatch();
    const [tags, setTags] = useState({data:[]});
    let tagsSelectState = useSelector((state)=>state.tagsSelectState);
    const getTags = async ()=>{
        const data = await getTagsData();
        setTags(data);
    }
    const selectTag = async (tag) => {
        if(tagsSelectState!==tag){
            dispatch(setTag(tag));
            dispatch(setPage(0));
            await getPostData(dispatch, 0, tag);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    useEffect(()=>{
        getTags();
    }, [])
  return <div className="grup-tag">
              {tags.data.map((tag)=>{
                  return <div onClick={()=>selectTag(tag)}
                              className={`tag-select ${tagsSelectState===tag?('tag-select-color'):('tag-unselect-color')}`} key={tag}>{tag===""?("All"):(tag)}
                  </div>
              })}
          </div>

}
export default Tags