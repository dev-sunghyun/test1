package com.project.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.board.dao.BoardDAO;
import com.project.board.dto.BoardDTO;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	private BoardDAO dao;
	
	@Override
	public List<BoardDTO> listBoard() {
		return dao.selectBoard();
	}
}
