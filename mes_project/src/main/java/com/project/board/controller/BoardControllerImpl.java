package com.project.board.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.board.dto.BoardDTO;
import com.project.board.service.BoardServiceImpl;

@Controller
public class BoardControllerImpl implements BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardControllerImpl.class);      
    
	@Autowired                                                                              
	private BoardServiceImpl service;   
	
	BoardControllerImpl() {
		System.out.println("BoardControllerImpl 실행");
	}
	            
	@Override
	@RequestMapping("/boardTable.do")
	public String viewBoardList(Model model) {                                                                                     
		List<BoardDTO> list = service.listBoard();
		
		System.out.println("list : " + list.size());
		
		model.addAttribute("list", list);
		
		return "boardTable";
	}

}
