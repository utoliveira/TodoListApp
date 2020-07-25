package com.todoapp.bean.mapper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.util.CollectionUtils;

public interface IMapper<E,D> {


	/**
	 * Transform the data from entity into DTO with all the nearest foreign relationship.
	 * For a simpler version of the data, use toBasicDTO
	 * @param entity
	 * @return
	 */
	D toDTO(E entity);
	
	/**
	 * Tranform the data from entity into DTO ignoring the relationships
	 * @param entity
	 * @return
	 */
	D toBasicDTO(E entity);
	
	/**
	 * Transform the data from DTO into a new entity object. 
	 * @param dto
	 * @return
	 */
	E toNewEntity(D dto, String user, Date date);
	
	default List<D> toDTOList(List<E> entities){
		if(CollectionUtils.isEmpty(entities)) {
			return Collections.emptyList();
		}
		
		List<D> dtos = new ArrayList<>();
		entities.forEach(entity -> dtos.add(toDTO(entity)));
		return dtos;
	}
	
	default List<D> toBasicDTOList(List<E> entities){
		if(CollectionUtils.isEmpty(entities)) {
			return Collections.emptyList();
		}
		
		List<D> dtos = new ArrayList<>();
		
		entities.forEach(entity -> dtos.add(toBasicDTO(entity)));
		return dtos;
	}
	
}
