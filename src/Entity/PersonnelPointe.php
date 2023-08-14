<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PersonnelPointeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: PersonnelPointeRepository::class)]
class PersonnelPointe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Pointage $pointage = null;

    #[ORM\Column]
    private ?float $qte = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Unite $unite = null;

    #[ORM\Column]
    private ?float $prixUnitaire = null;

    #[ORM\Column]
    private ?float $montant = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Personnel $personnel = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPointage(): ?Pointage
    {
        return $this->pointage;
    }

    public function setPointage(?Pointage $pointage): static
    {
        $this->pointage = $pointage;

        return $this;
    }

    public function getQte(): ?float
    {
        return $this->qte;
    }

    public function setQte(float $qte): static
    {
        $this->qte = $qte;

        return $this;
    }

    public function getUnite(): ?Unite
    {
        return $this->unite;
    }

    public function setUnite(?Unite $unite): static
    {
        $this->unite = $unite;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prixUnitaire;
    }

    public function setPrixUnitaire(float $prixUnitaire): static
    {
        $this->prixUnitaire = $prixUnitaire;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(float $montant): static
    {
        $this->montant = $montant;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): static
    {
        $this->personnel = $personnel;

        return $this;
    }
}
