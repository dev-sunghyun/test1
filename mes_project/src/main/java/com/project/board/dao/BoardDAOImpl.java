package com.project.board.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.board.dto.BoardDTO;

@Repository
public class BoardDAOImpl implements BoardDAO{
	
	@Autowired
	private SqlSession sess;
	
	BoardDAOImpl() {
		System.out.println("BoardDAOImpl 실행");
	}
	
	public List<BoardDTO> selectBoard() {
		List<BoardDTO> list = sess.selectList("mapper.board.selectBoard");
		
		System.out.println("BoardDAOImpl > selectBoard >  list : " + list);
		
		return list;
	}
}
