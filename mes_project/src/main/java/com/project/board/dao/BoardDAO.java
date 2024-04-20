package com.project.board.dao;

import java.util.List;

import com.project.board.dto.BoardDTO;

public interface BoardDAO {
	public List<BoardDTO> selectBoard();
}
