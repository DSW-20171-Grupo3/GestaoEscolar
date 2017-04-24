package com.gestaoescolar.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.gestaoescolar.entity.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{
	 /**
     * Encontra todos os alunos de uma turma.
     * 
     * @param idTurma
     * @return lista de alunos
     */
    List<Aluno> findByIdTurma(String id_turma);
    
    /**
* Encontra um aluno a partir de seu nome. 
* Retorna uma lista pois podem existir
     * mais de um aluno com o mesmo nome.
     * 
     * @param nome
     * @return lista de alunos
     */
    List<Aluno> findByNome(String nome);
    
    /**
* Encontra um aluno a partir de sua matricula, como a matricula é única, apenas um aluno pode ser encontrado. 
     * 
     * @param matricula
     * @return aluno
     */
    Aluno findByMatricula(String matricula);
}
