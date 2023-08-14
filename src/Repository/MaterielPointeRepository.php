<?php

namespace App\Repository;

use App\Entity\MaterielPointe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MaterielPointe>
 *
 * @method MaterielPointe|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielPointe|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielPointe[]    findAll()
 * @method MaterielPointe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielPointeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MaterielPointe::class);
    }

//    /**
//     * @return MaterielPointe[] Returns an array of MaterielPointe objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MaterielPointe
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
