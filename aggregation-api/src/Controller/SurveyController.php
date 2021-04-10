<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use App\Service\AggregationMethods;

class SurveyController extends AbstractController
{

    /**
     * @Route("/survey", name="survey", methods={"GET"})
     */
    public function index(NormalizerInterface $normalizer, AggregationMethods $aggregation): Response
    {
		$json = $_GET['json'];

		$average = $aggregation->median_method($json);
		$average_json = $normalizer->normalize($average);
		return $this->json($average_json, 200, []);
    }
}
