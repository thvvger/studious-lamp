<?php

namespace App\Repository;

use App\Entity\MateriauPointe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MateriauPointe>
 *
 * @method MateriauPointe|null find($id, $lockMode = null, $lockVersion = null)
 * @method MateriauPointe|null findOneBy(array $criteria, array $orderBy = null)
 * @method MateriauPointe[]    findAll()
 * @method MateriauPointe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MateriauPointeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MateriauPointe::class);
    }

//    /**
//     * @return MateriauPointe[] Returns an array of MateriauPointe objects
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

//    public function findOneBySomeField($value): ?MateriauPointe
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
