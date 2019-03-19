package com.tfg.bookmanageragmsqlh.repository;

import com.tfg.bookmanageragmsqlh.domain.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Comment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("SELECT c FROM Comment c WHERE c.book.id = ?1")
    Page<Comment> getCommentsByBook(Long id, Pageable pageable);

}
