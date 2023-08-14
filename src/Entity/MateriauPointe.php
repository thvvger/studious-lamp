<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MateriauPointeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: MateriauPointeRepository::class)]
class MateriauPointe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Pointage $pointage = null;

    #[ORM\Column(length: 255)]
    private ?float $qte = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Unite $unite = null;

    #[ORM\Column(length: 255)]
    private ?float $prixUnitaire = null;

    #[ORM\Column]
    private ?float $montant = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Materiau $materiau = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Pointage|null
     */
    public function getPointage(): ?Pointage
    {
        return $this->pointage;
    }

    /**
     * @param Pointage|null $pointage
     * @return MateriauPointe
     */
    public function setPointage(?Pointage $pointage): MateriauPointe
    {
        $this->pointage = $pointage;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getQte(): ?float
    {
        return $this->qte;
    }

    /**
     * @param float|null $qte
     * @return MateriauPointe
     */
    public function setQte(?float $qte): MateriauPointe
    {
        $this->qte = $qte;
        return $this;
    }

    /**
     * @return Unite|null
     */
    public function getUnite(): ?Unite
    {
        return $this->unite;
    }

    /**
     * @param Unite|null $unite
     * @return MateriauPointe
     */
    public function setUnite(?Unite $unite): MateriauPointe
    {
        $this->unite = $unite;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getPrixUnitaire(): ?float
    {
        return $this->prixUnitaire;
    }

    /**
     * @param float|null $prixUnitaire
     * @return MateriauPointe
     */
    public function setPrixUnitaire(?float $prixUnitaire): MateriauPointe
    {
        $this->prixUnitaire = $prixUnitaire;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getMontant(): ?float
    {
        return $this->montant;
    }

    /**
     * @param float|null $montant
     * @return MateriauPointe
     */
    public function setMontant(?float $montant): MateriauPointe
    {
        $this->montant = $montant;
        return $this;
    }

    public function getMateriau(): ?Materiau
    {
        return $this->materiau;
    }

    public function setMateriau(?Materiau $materiau): static
    {
        $this->materiau = $materiau;

        return $this;
    }

}
